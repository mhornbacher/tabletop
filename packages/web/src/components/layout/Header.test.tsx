import { RenderResult, fireEvent, render } from "../../test-utils"
import DarkMode from "../functional/DarkMode"
import Header from "./Header"

describe('<Header />', () => {

  let component: RenderResult

  beforeEach(() => {
    component = render(
      <DarkMode><Header /></DarkMode>
    )
  })

  it('should have a heading', () => {
    const heading = component.getByText('🐉 TableTop')

    expect(heading).toBeInTheDocument()
    expect(heading.tagName).toBe('DIV')
    expect(heading).toHaveClass('bp5-navbar-heading')
  })

  it('should have night mode toggle', () => {
    const toggle = component.getByRole('checkbox')

    expect(toggle).not.toBeChecked()
    expect(component.baseElement).not.toHaveClass('bp5-dark')

    fireEvent.click(toggle)

    expect(toggle).toBeChecked()
    expect(component.baseElement).toHaveClass('bp5-dark')
  })
})
