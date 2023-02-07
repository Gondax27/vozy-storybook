import { CFormCheck } from '@coreui/react'
import { VzLabel } from '../Label'

import './styles.scss'

interface CheckboxProps {
  /**
   * ID of the component
   */
  id?: string
  /**
   * Common bootstrap styles
   */
  className?: string
  /**
   * Label that renders the component
   */

  label: string
  /**
 * Controls the active/inactive state of the switch
 */
  checked: boolean
  /**
  * Handles the disabled state of the radio button
  */
  disabled?: boolean
  /**
 * Handles the onChange function of the radio button
 */
  onChange: () => void
}

export const VzCheckbox = ({ id, className = '', label, disabled, checked, onChange }: CheckboxProps) => (
  <CFormCheck
    id={id}
    className={`vz-checkbox ${className}`}
    label={<VzLabel type='default' label={label} />}
    disabled={disabled}
    checked={checked}
    onChange={onChange}
  />
);
