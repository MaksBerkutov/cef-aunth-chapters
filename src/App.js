import { useState } from 'react'
import './App.css'
import Aunth from './Components/Aunth/Aunth.jsx'
import Chapters from './Components/Chapters/Chapters.jsx'
import CreateChapter from './Components/CreateChapters/CreateChapter.jsx'

function App() {
	const [chapters, setChapters] = useState(null)
	const [createChpaters, setCreateMode] = useState(-1)
	return (
		<div className={chapters === null && 'aunthBackground'}>
			{chapters === null && <Aunth setResponse={setChapters} />}
			{chapters !== null && createChpaters === -1 && (
				<Chapters {...{ setCreateMode, chapters }} />
			)}
			{createChpaters !== -1 && (
				<CreateChapter {...{ setCreateMode, createChpaters, setChapters }} />
			)}
		</div>
	)
}

export default App
