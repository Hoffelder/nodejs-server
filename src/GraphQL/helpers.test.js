import { describe } from 'riteway'
import { createRelations, getDataParsed, createSchematype } from './helpers'

describe('createRelations()', async assert => {

    {

        const actual = createRelations()()
        const expected = {}

        assert ({

            given: 'no relations',
            should: 'return an empty object', 
            actual, 
            expected, 
            
        })
    }

})

describe('getDataParsed()', async assert => {
    {
        const actual = getDataParsed()
        const expected = {}
        assert({
            given: 'no query and not split symbol',
            should: 'return an empty object', 
            actual, 
            expected,
        })
    }    
})

describe('createSchemaType()', async assert => {
    {
        const actual = createSchemaType()()
        const expected = ''

        assert({
            given: 'no name and types',
            should: 'returna an empty string', 
            actual, 
            expected, 
        })
    }    
})

