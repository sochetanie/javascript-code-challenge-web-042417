class CommentList {
    constructor () {
        this.comments = []
    }

    renderComments () {
        return this.comments.map(x => x.render())
    }

    render () {
        return `<ul>${this.renderComments().join('')}</ul>`
    }

    addComment (text) {
        const newCom = new Comment(text)
        this.comments.push(newCom)
    }

}