import { shallow } from "enzyme"
import { GrifGridItem } from "../components/GifGridItem"

describe('test on GifGridItem', () => {

    const title ='Un titulo'
    const url = 'https://localhost/algo.jpg'
    test('should show component', () => {
        const wrapper = shallow(<GrifGridItem title={title} url={url} />)
        expect(wrapper).toMatchSnapshot()
    })
    
})
