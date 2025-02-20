import React from 'react';
import ReactDOM from 'react-dom';
import { Analytics } from '@vercel/analytics/react';
import './index.css';

function App() {
    return (
        <div>
            <h1>二进制图像转 PNG 格式 (Convert Your Image to PNG)</h1>
            <input type="file" id="imageInput" accept="image/*" />
            <canvas id="canvas" style={{ display: 'none' }}></canvas>
            <a id="downloadLink" style={{ display: 'none' }}>Download PNG</a>
            <p className="message">Select an image file to convert to PNG format.</p>
            <p id="errorMessage" className="error" style={{ display: 'none' }}>
                Please upload a valid image file (JPG, PNG, JPEG).
            </p>
            <button id="downloadBackground">下载背景图 (Download Background Image)</button>
            <button id="changeBackground">切换背景图 (Change Background)</button>

            {/* 加入 Vercel Analytics 组件 */}
            <Analytics />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
