const templateAtomicType = (key, [value, comment]) => 
    `
    "${comment}"
    ${key}: ${value}
    `

export const createSchemaType = (name = '') => (types = '') => {
    const properties = Object.entries(types).map(([key, definition]) => {
        return typeof definition === 'function' ? key : templateAtomicType(key, definition)
    })
    
    return name ? `
        type ${name} {
            ${properties.join('\n')}
        }        
    ` :  ''
}

export const getDataParsed = (query = {}, split = '') => {
    return Object.entries(query).map(([definition, resolver]) => {
        if (definition.includes('(') && definition.includes(')')) {
            const [key] = definition.split('(')
            return { definition, resolver: { [key]: resolver}}
        }

        const [key] = definition.split(split)
        return { definition, resolver: { [key]: resolver }}
    })
}

export const createRelations = (name = '') => (types = {}) => {
    const properties = Object.entries(types).reduce((acum, [key, definition]) => {
        if (typeof definition === 'function') {
            const keyParsed = key.split(':')[0].trim()
            return { ...acum, [keyParsed]: definition }
        }

        return acum 
    }, {})

    return name ? { [name]: properties } : {}
}






