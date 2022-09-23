/* eslint-disable */
import React, { useEffect, useState } from 'react'
import * as S from './styles.js'
import { useParams, useNavigate } from 'react-router-dom'

import api from '../../Services/api'

import { FaArrowLeft } from 'react-icons/fa'


export default function Repos() {


    const navigate = useNavigate()
    const { repositorio } = useParams()

    const [infoRepo, setInfoRepo] = useState({})
    const [infoIssues, setInfoIssues] = useState([])
    const [page, setPage] = useState(1)

    const [loading, setLoading] = useState(true)
    const [loadingIssues, setLoadingIssues] = useState(false)


    useEffect(() => {

        async function fetchInfoRepo() {
            const [repositorioData, issuesData] = await Promise.all([
                api.get(`repos/${repositorio}`),
                api.get(`repos/${repositorio}/issues`), {
                    params: {
                        state: 'open',
                        page,
                        per_page: 5
                    }
                }
            ])

            setInfoRepo(repositorioData.data)
            setInfoIssues(issuesData.data)
            setLoading(false)
        }

        fetchInfoRepo()

    }, [])

    useEffect(() => {

        async function changePageIssues() {
            await api.get(`repos/${repositorio}/issues`, {
                params: {
                    state: 'open',
                    page,
                    per_page: 5
                }
            })

                .then((snapshot) => {
                    setInfoIssues(snapshot.data)
                })

                .catch(error => console.log(error))
        }

        changePageIssues()

    }, [page, repositorio])

    return (
        <S.Container>
            {loading ?
                <h1>Carregando...</h1>

                :

                <>
                    <FaArrowLeft size={30} onClick={() => navigate('/')} />

                    <S.Owner>
                        <img src={infoRepo.owner.avatar_url} alt='Imagem do dono do Repositório' />
                        <h3>{infoRepo.name}</h3>
                        <p>{infoRepo.description}</p>
                    </S.Owner>


                    <S.IssuesList>
                        <h2>* Issues *</h2>

                        {infoIssues.map((issue, index) =>
                            <li key={index}>
                                <img src={issue.user.avatar_url} alt={issue.user.login} />

                                <div>
                                    <strong>
                                        <a href={issue.html_url}>{issue.title}</a>

                                        {issue.labels.map((label, index) =>
                                            <span key={index}>
                                                {label.name}
                                            </span>
                                        )}
                                    </strong>

                                    <p>{issue.user.login}</p>
                                </div>
                            </li>
                        )}
                    </S.IssuesList>

                    <S.Actions>
                        <button
                            type='button'
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                        >
                            Voltar
                        </button>

                        <button
                            type='button'
                            onClick={() => setPage(page + 1)}
                        >
                            Próxima
                        </button>
                    </S.Actions>
                </>
            }

        </S.Container>
    )
}