import React from 'react'
import { Helmet } from 'react-helmet-async'

interface Props { 
    title: string,
    description?: string,
    name?: string
}

const SEO = ({
    title,
    description= "Store",
    name="Platzi Conf Merch"
}: Props) => {
    return (

        <Helmet>
            <title>{title}</title>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={name} />
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:title" content="Platzi Conf Store" />
            <meta name="twitter:description" content={description} />
            <meta
                name="twitter:image"
                content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
            />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta
                property="og:image"
                content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
            />
            {/* <meta property="og:url" content="platzistore.xyz" /> */}
            <meta property="og:site_name" content="Platzi Conf Store" />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:type" content="article" />
            {/* <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
        </Helmet>
    )
}

export { SEO }