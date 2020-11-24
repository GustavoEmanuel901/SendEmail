import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface Props {
  toggleTheme(): void;
  className?: string
}

const SwitchComponent: React.FC<Props> = ({ toggleTheme, className }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Switch
      onChange={toggleTheme}
      className={className}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      onHandleColor={colors.text}
      offHandleColor={colors.text}
      offColor={shade(0.15, colors.inputColor)}
      onColor={colors.secondary}
    />
  );
};

export default SwitchComponent;
