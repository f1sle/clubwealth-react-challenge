import { useNavigate } from 'react-router-dom';

export default function Button({ style = 'primary', text = false, link, icon = false, ...props }) {
  let navigate = useNavigate();
  return link ? (
      <button onClick={() => navigate(link)} className={`button_${style} posCenter`} {...props}>
        {text} {icon}
      </button>
  )
  :
  (
    <button className={`button_${style} posCenter`} {...props}>
      {text} {icon}
    </button>
  )
}