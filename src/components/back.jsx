
export default function Back() {
    return (
        <div className="ribbon-box" onClick={() => window.location.href = '/'}>
            <span className="ribbon"></span>
            <div className="ribbon-box-inside">
                <p>EXIT</p>
            </div>
        </div>
    );
}

/* <button className="back-btn" onClick={() => window.location.href = '/projects'}> Exit </button> */