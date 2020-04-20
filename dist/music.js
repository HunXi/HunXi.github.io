const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 40,
	fixed: true,
	theme: '#b7daff',
    audio: [
        {
            name: 'BINGBIAN病变',
            artist: '鞠文娴',
            url: 'http://www.ytmp3.cn/down/59502.mp3',
            cover: 'http://img.ytmp3.cn/image/56.jpg',
        }
    ]
});