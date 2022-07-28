import { useSelector } from 'react-redux'
import '../results.css'

const Results = () => {
  const { texts } = useSelector(state => state)

  return (
    <div className='container-results'>
      <h3>Results:</h3>
      <div className='results'>
        {texts?.map(t => <div className='mb-3 text' key={t.inverted}>{t.inverted}</div>)}
      </div>
    </div>
  )
}

export default Results
