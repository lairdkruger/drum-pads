import { Howl } from 'howler'
import { useEffect, useState } from 'react'
import './DrumPads.scss'

export default function DrumPads() {
	const [howl, setHowl] = useState()

	// Howl setup
	useEffect(() => {
		const howlInstance = new Howl({
			src: '../kits/BobAzzam.mp3',
			sprite: {
				kick: [0, 1800],
				snare: [2000, 1800],
				hat: [4000, 1800],
				alt: [6000, 1800],
			},
			autoplay: false,
			loop: false,
		})

		setHowl(howlInstance)
	}, [])

	// Clean up on unmount
	useEffect(() => {
		return () => {
			if (howl) howl.unload()
		}
	}, [howl])

	return (
		<div className="drum-pads-wrapper">
			<div
				className="drum-pad"
				onPointerDown={() => {
					if (howl) howl.play('alt')
				}}
			>
				<p>Alt</p>
			</div>
			<div
				className="drum-pad"
				onPointerDown={() => {
					if (howl) howl.play('hat')
				}}
			>
				<p>Hat</p>
			</div>
			<div
				className="drum-pad"
				onPointerDown={() => {
					if (howl) howl.play('kick')
				}}
			>
				<p>Kick</p>
			</div>
			<div
				className="drum-pad"
				onPointerDown={() => {
					if (howl) howl.play('snare')
				}}
			>
				<p>Snare</p>
			</div>
		</div>
	)
}
