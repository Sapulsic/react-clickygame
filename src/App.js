import React, { Component } from "react";
import MobCard from "./components/MobCard";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import mobpsycho from "./mobpsycho.json";


class App extends Component {
    state = {
        mobpsycho
    };

    MobCard = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const mobpsycho = this.state.mobpsycho.filter(mobpsycho => mobpsycho.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ mobpsycho });
    };

    render() {
        return (
            <div>
            {this.state.mobpsycho.map(mobpsycho => (
                <MobCard
                    id={mobpsycho.id}
                    name={mobpsycho.name}
                    image={mobpsycho.image}
                />
            ))}
            </div>
        )
    }
}

export default App;