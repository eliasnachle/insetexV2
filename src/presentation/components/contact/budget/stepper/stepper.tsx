import { lineProgress, StepperContainer, StepperIcon, StepperItem } from './stepper.css'
import { RiMapPinLine } from '@react-icons/all-files/ri/RiMapPinLine'
import { AiFillBug } from '@react-icons/all-files/ai/AiFillBug'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { Component } from 'react'
import stepsMap from './stepsMap'

class Stepper extends Component {
  render() {
    return (
      <div className={StepperContainer}>
        {/* <div className={StepperItem}>
          <div
            className={StepperIcon}
            style={{ border: '2px solid #25AA77', background: '#25AA77' }}>
            <AiFillBug style={{ fill: '#fff' }} />
          </div>
          <span style={{ color: '#25AA77' }}>Pragas</span>
        </div>
        <div className={lineProgress} style={{ background: '#25AA77' }} /> */}

        {/* <div className={StepperItem}>
          <div className={StepperIcon} style={{ border: '2px solid #0085FF' }}>
            <RiMapPinLine style={{ fill: '#0085FF' }} />
          </div>
          <span style={{ color: '#121826' }}>Endereço</span>
        </div>
        <div className={lineProgress} /> */}
        {stepsMap.map((it, i) => (
          <>
            <div className={StepperItem} key={i}>
              <div className={StepperIcon}>{it.icon}</div>
              <span>{it.label}</span>
            </div>
            {it.id < 2 && <div className={lineProgress} />}
          </>
        ))}
      </div>
    )
  }
}

export default Stepper
