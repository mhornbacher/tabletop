import './Header.scss'

import { Navbar, Button, Switch, FormGroup } from "@blueprintjs/core";
import { LogIn } from "@blueprintjs/icons";
import { useCallback, useContext } from 'react';
import DarkModeContext from '../../contexts/DarkModeContext';

export default function Header() {
  const {darkMode, setDarkMode} = useContext(DarkModeContext);

  const onChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    setDarkMode(event.currentTarget.checked);
  }, [setDarkMode])

  return (
    <Navbar fixedToTop id="header">

      <Navbar.Group align="left">
        <Navbar.Heading>🐉 TableTop</Navbar.Heading>
      </Navbar.Group>

      <Navbar.Group align="right">
        <Button minimal icon={<LogIn />} text="Log In" />
        <Navbar.Divider />
        <FormGroup>
          <Switch
            innerLabel="🌞"
            innerLabelChecked="🌚" large
            checked={darkMode}
            onChange={onChange} />
        </FormGroup>
      </Navbar.Group>
    </Navbar>
  )
}
