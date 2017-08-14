ReactDOM.render(
    <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#navbar"
                    >
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="#">
                        React with JSX
                    </a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="/">With Objects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="container">
            <div className="starter-template">
                <h1>Bootstrap starter template</h1>
                <p className="lead">
                    Use this document as a way to quickly start any new project.
                </p>
            </div>
        </div>
    </div>,
    document.getElementById('root')
);
