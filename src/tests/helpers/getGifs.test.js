import { getGifs } from "../../helpers/getGifs";

describe('getGifs Fetch', () => {
    test('should bring ten elements', async() => {
      
        const gifs = await getGifs('One Punch')
        expect( gifs.length ).toBe( 10 )
    })

    test('should bring zero elements', async() => {
      
        const gifs = await getGifs('')
        expect( gifs.length ).toBe( 0 )
    })

});
