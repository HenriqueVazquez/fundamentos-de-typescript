import './styles.css';
import { CardProps } from '../../types/Card';



export function Card(props: CardProps) {
  return (
    <div className='card'>
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )

}