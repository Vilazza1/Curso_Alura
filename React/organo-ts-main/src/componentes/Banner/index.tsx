import './Banner.css'

import React from 'react'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>
    )
}

export default Banner