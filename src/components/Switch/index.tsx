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
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  // onChange: (status: any) => void
}

export const VzSwitch = ({
  id,
  className,
  labelClassName,
  leftLabel, labelLeftClassName, rightLabel, labelRightClassName,
  active,
  disabled,
  size,
  // onChange,
}: SwitchProps) => {
  return (
    <div className={`vz-switch-wrapper ${className || ''}`}>
      {leftLabel && (
        <VzLabel
          label={leftLabel}
          type='default'
          className={`${labelClassName} ${labelLeftClassName} mr-2`}
        />
      )}

      <CFormSwitch
        id={id}
        checked={active}
        disabled={disabled}
        
        label=''
        className={`vz-toggle-switch c-switch-${size}`}
        // onChange={(ev) => onChange(ev.target.checked)}
      />

      {rightLabel && (
        <VzLabel
          label={rightLabel}
          type='default'
          className={`${labelClassName} ${labelRightClassName} ml-2`}

        />
      )}
    </div>
  )
}
