import './ScoreBoard.css'

const ScoreBoard = ({scoreX,ScoreO}) => (
    <div className='ScoreBoard'>
        <div>{scoreX}</div>
        <div>{ScoreO}</div>
    </div>
)

export default ScoreBoard;