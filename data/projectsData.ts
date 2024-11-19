interface Project {
    title: string
    description: string
    href?: string
    imgSrc?: string
}

const projectsData: Project[] = [
    {
        title: 'A game engine for Roguelikes',
        description: `Game engine made in C++ and designed specifically to develop
    roguelike games. The engine incorporates an Entity-Component-System (ECS)
    architecture using Flecs, providing flexible and efficient game object management`,
        imgSrc: '/static/images/rogue-screen.png',
        href: 'https://github.com/ljfp/RLEngine',
    },
    {
        title: 'R7RS Scheme compiler and interpreter.',
        description: `Fast and correct compiler for the R7RS Scheme language. Written in C
    for performance and portability.`,
        imgSrc: '/static/images/r7rs-scheme.png',
        href: '/blog/orlando',
    },
]

export default projectsData
