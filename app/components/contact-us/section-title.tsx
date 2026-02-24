import React from 'react'

type SectionTitleProp = {
    children: React.ReactNode
}

function SectionTitle(props: SectionTitleProp) {
    const { children } = props
    return (
        <h2 className='font-medium text-3xl mt-5 mb-8 text-center text-[#d75835]'>{children}</h2>
    )
}

export default SectionTitle