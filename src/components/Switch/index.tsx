import { CFormSwitch } from "@coreui/react"

import { VzLabel } from "../Label"

import './styles.scss'

interface SwitchProps {
  /**
   * ID of the component
   */
  id?: string
  /**
   * Common bootstrap styles
   */
  className?: string
  labelClassName?: string
  labelLeftClassName?: string
  labelRightClassName?: string
  leftLabel?: string
  rightLabel?: string
  active: boolean
  disabled?: boolean
  size?: 'lg' | 'xl' | undefined
  onChange: (status: boolean) => void
}

export const VzSwitch = ({
  id,
  className,
  labelClassName,
  leftLabel, labelLeftClassName, rightLabel, labelRightClassName,
  active,
  disabled,
  size,
  onChange
}: SwitchProps) => (
  <div className={`vz-switch-wrapper ${className || ''}`}>
    {leftLabel && (
      <VzLabel
        label={leftLabel}
        type='default'
        className={`${labelClassName || ''} ${labelLeftClassName || ''} mb-0 me-2`}
      />
    )}

    <CFormSwitch
      id={id}
      checked={active}
      disabled={disabled}
      size={size}
      className='vz-toggle-switch'
      onChange={ev => onChange(ev.target.checked)}
    />

    {rightLabel && (
      <VzLabel
        label={rightLabel}
        type='default'
        className={`${labelClassName || ''} ${labelRightClassName || ''} mb-0`}

      />
    )}
  </div>
);
