import { budgetContainer } from './budget.css'
import Stepper from './stepper/stepper'

export default function Budget() {
  return (
    <div className={budgetContainer}>
      <Stepper />
    </div>
  )
}
