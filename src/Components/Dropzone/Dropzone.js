import React, { Component } from 'react'
import './Dropzone.css'

class Dropzone extends Component {
    constructor(props) {
        super(props)
        this.state = { highlight: false }
        this.fileInputRef = React.createRef();

        this.openFileDialog = this.openFileDialog.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    /*render() {
        return <p>Dropzone</p>
    }*/

    render() {
        return (
            <div className={`Dropzone ${this.state.highlight ? 'Highlight' : ''} `}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}
                onClick={this.openFileDialog}
                style={{ cursor: this.props.disabled ? 'default' : 'pointer'}}>
                <input
                   ref={this.fileInputRef}
                   className="FileInput"
                   type="file"
                   multiple onChange={this.onFilesAdded}
                />
                <img
                    alt="upload"
                    className="Icon"
                    src="upload-logo.png"
                />
                <span>Upload Files</span>
            </div>
        );
    }

    openFileDialog() {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }

    onFilesAdded(evt) {
        if (this.props.disabled) return;
            const files = evt.target.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
    }

    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    onDragOver(evt) {
        evt.preventDefault();

        if (this.props.disabled) return;

        this.setState({ highlight: true });
    }

    onDragLeave(evt) {
        this.setState({ highlight: false });
    }

    onDrop(evt) {
        evt.preventDefault();

        if (this.props.disabled) return;

        const files = evt.dataTransfer.files;

        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
        this.setState({ highlight : false });
    }

}

export default Dropzone;