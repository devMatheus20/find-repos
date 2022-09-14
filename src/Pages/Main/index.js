import React, { useRef, useState, useCallback, useEffect } from 'react'
import * as S from './styles.js'
import { useNavigate } from 'react-router-dom'

import api from '../../Services/api'

import { toast } from 'react-toastify';

import { FaGithub, FaPlus, FaSpinner, FaTrash, FaBars } from 'react-icons/fa'



export default function Main() {

    const navigate = useNavigate()

    const repoRef = useRef()

    const [repositorios, setRepositorios] = useState([])

    const [loading, setLoading] = useState(false)
    const [loadingRepos, setLoadingRepos] = useState(true)



    useEffect(() => {

        const loadStorage = () => {
            const storageUser = JSON.parse(localStorage.getItem('Repositorios')) 

            if(storageUser) {
                setRepositorios(storageUser)
            }

            setLoadingRepos(false)
        }

        loadStorage()

    }, [])


    useEffect(() => {

        const updateStorage = () => {
            localStorage.setItem('Repositorios', JSON.stringify(repositorios))
        }

        updateStorage()

    }, [repositorios])


    const handleSubmit = useCallback(e => {
        e.preventDefault()

        const repo = repoRef.current.value

        async function submit() {

            setLoading(true)

            try {
                if (repo !== '') {

                    const index = repositorios.findIndex(item => repo === item.name)

                    if (index >= 0) {
                        toast.info("Este repositório já foi adicionado!")
                        repoRef.current.value = ''
                        return
                    }

                    const { data } = await api.get(`repos/${repo}`)

                    const infosRepo = {
                        name: data.full_name
                    }

                    setRepositorios([...repositorios, infosRepo])
                    repoRef.current.value = ''
                    toast.success("Repositório adicionado com sucesso!")

                } else {
                    toast.info("Preencha todos os campos!")
                }

            } catch (error) {

                console.log(error)

                if (error.code === "ERR_BAD_REQUEST") {
                    toast.error("Repositório não encontrado")
                    repoRef.current.value = ''
                    return
                }

                console.log("Ops, algo deu errado!")

            } finally {
                setLoading(false)
            }
        }

        submit()

    }, [repositorios])


    const handleDelete = useCallback((repoName) => {

        const storageUser = JSON.parse(localStorage.getItem('Repositorios'))

        const filter = storageUser.filter(item => item.name !== repoName)

        setRepositorios(filter)

        toast.success("Repositório removido com sucesso!")

    }, [repositorios])


    return (
        <S.Container>

            <h1>
                <FaGithub />
                Meus Repositórios
            </h1>

            <S.Form onSubmit={handleSubmit}>
                <input
                    ref={repoRef}
                    type="text"
                    placeholder='Adicionar repositórios'
                />

                {loading ?
                    <S.SubmitButton
                        isLoading={loading}
                    >
                        <FaSpinner className='loading' color="#FFF" size={15} />
                    </S.SubmitButton>
                    :

                    <S.SubmitButton>
                        <FaPlus color="#FFF" size={14} />
                    </S.SubmitButton>
                }
            </S.Form>

            {loadingRepos ?
                <h3>Carregando detalhes...</h3>

                :

                <S.List>
                    {repositorios.map((item, index) =>
                        <li key={index}>
                            <div>
                                <FaTrash size={20} onClick={() => handleDelete(item.name)} />
                                <p>{item.name}</p>
                            </div>

                            <FaBars size={20} onClick={() => navigate(`/repos/${encodeURIComponent(item.name)}`)}/>
                        </li>
                    )}
                </S.List>
            }

        </S.Container>
    )
}