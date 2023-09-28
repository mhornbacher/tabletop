import { render } from "./test-utils"
import App from "./App"

describe('<App/>', () => {
  it('should render button', () => {
    const component = render(<App />)

    expect(component).not.toBeEmptyDOMElement()
  })
})
