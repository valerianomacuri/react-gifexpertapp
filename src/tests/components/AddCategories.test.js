const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategories");

describe('<AddCategory />', () => {

    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />)
    beforeEach( () => {
      jest.clearAllMocks()

      wrapper = shallow( <AddCategory setCategories={ setCategories } /> )
    } )
    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot()
    })

    test('should change the text field', () => {
      const input = wrapper.find('input')
        const value = 'Hola Mundo'
      input.simulate('change', {
        target: {
            value
        }
      })

      expect( wrapper.find('input').prop('value') ).toBe( value )
    })

    test('should not post the information with submit action', () => {
      wrapper.find('form').simulate('submit', {
        preventDefault(){}
      })

      expect( setCategories ).not.toHaveBeenCalled()
    });
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

      const value = 'Hola Mundo'

      wrapper.find('input').simulate('change', { target: { value } })

      wrapper.find('form').simulate('submit', { preventDefault(){} })

      expect( setCategories ).toHaveBeenCalledWith(
        // para que el argumento de la función sea una función
        expect.any(Function)
      )

      expect( wrapper.find('input').prop('value') ).toBe('')

    })
});
