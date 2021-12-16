import React, { useEffect, useState } from 'react';
import Memo from '../Memo/Memo';
import ToolsCard from '../ToolsCard/ToolsCard';
import './Main.css'

const Main = () => {

    // state change
    const [tools, setTools] = useState([]);
    const [memo, setMemo] = useState([]);

    // data load
    useEffect(() => {
        fetch('./tools.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    // click handler
    const handlerTools = (tool) => {
        const newCount = [...memo, tool];
        setMemo(newCount);

    }
    return (
        <div className="container">
            <div className="row">
                {/* tools container */}
                <div className="col-md-8">
                    <div className="row">
                        {
                            tools.map(tool => <ToolsCard
                                key={tool.id}
                                tool={tool}
                                handlerTools={handlerTools}
                            />)
                        }
                    </div>
                </div>
                {/* tools count container */}
                <div className="col-md-4">
                    <Memo memo={memo} />
                </div>
            </div>
        </div>
    );
};

export default Main;