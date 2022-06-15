const music = new Audio('ngo.mp3')

const songs = [
	{
		id: '1',
		songName: `Hành lang cũ <br>
    <div class="subtitle">Long Nón lá</div> `,
		poster: 'image/1.jpg',
	},

	{
		id: '2',
		songName: ` Xách balo và đi <br>
    <div class="subtitle">cover</div> `,
		poster: 'image/2.jpg',
	},
	{
		id: '3',
		songName: `Ngày Ấy Bạn Và Tôi <br>
    <div class="subtitle">Lynk Lee</div> `,
		poster: 'image/3.jpg',
	},
	{
		id: '4',
		songName: ` Nụ Cười 18 20 <br>
    <div class="subtitle">Doãn Hiếu</div> `,
		poster: 'image/4.jpg',
	},
	{
		id: '5',
		songName: ` Tháng năm không quên <br>
    <div class="subtitle">AH2K</div> `,
		poster: 'image/5.jpg',
	},

	{
		id: '6',
		songName: ` Năm tháng ấy <br>
    <div class="subtitle">Green</div> `,
		poster: 'image/7.jpg',
	},
]
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

Array.from($$('.menu_song .songItem')).forEach((element, i) => {
	element.getElementsByTagName('img')[0].src = songs[i].poster
	element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName
})

let masterPlay = $('#masterPlay')
let wave = $$('.wave')[0]

masterPlay.addEventListener('click', () => {
	if (music.paused || music.currentTime <= 0) {
		music.play()
		masterPlay.classList.remove('bi-play-fill')
		masterPlay.classList.add('bi-pause-fill')
		wave.classList.add('active2')
	} else {
		music.pause()
		masterPlay.classList.add('bi-play-fill')
		masterPlay.classList.remove('bi-pause-fill')
		wave.classList.remove('active2')
	}
})

const makeAllPlays = () => {
	Array.from($$('.menu_song .playListPlay')).forEach(element => {
		console.log({ element })
		element.classList.add('bi-play-circle-fill')
		element.classList.remove('bi-pause-circle-fill')
	})
}

let index = 0

Array.from($$('.menu_song .playListPlay')).forEach(element => {
	element.addEventListener('click', e => {
		index = e.target.id
		makeAllPlays()
		e.target.classList.remove('bi-play-circle-fill')
		e.target.classList.add('bi-pause-circle-fill')
	})
})
