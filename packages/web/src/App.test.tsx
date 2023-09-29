import { render } from "./test-utils"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

describe('<App/>', () => {
  it('should render button', () => {
    const component = render(<MemoryRouter><App /></MemoryRouter>)

    expect(component.container).not.toBeEmptyDOMElement()
  })
})
