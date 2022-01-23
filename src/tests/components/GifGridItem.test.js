import { shallow } from "enzyme"
import { GrifGridItem } from "../../components/GifGridItem"

describe('test on GifGridItem', () => {

    const title ='Un titulo'
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GrifGridItem title={title} url={url} />)

    test('should show component', () => {
        expect(wrapper).toMatchSnapshot()
    })   

    test('should have a paragraph with title', () => {
        const p = wrapper.find('p')

        expect( p.text().trim() ).toBe( title )
    })

    test('should have a url image and alt atributte', () => {
        const img = wrapper.find('img')

        // console.log( img.props().src )
        expect( img.props().src ).toBe( url )
        expect( img.props().alt ).toBe(  title )
    });
    
    test('should have animate__fadeIn class', () => {
        const div = wrapper.find('div')
        
        const className = div.prop('className')
        expect( className.includes('animate__fadeIn') ).toBe( true )

    })
})
