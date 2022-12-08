import React from 'react';
import styles from './App.module.css';
import DomainList from './components/DomainList/DomainList';
import Header from './components/Header/Header';

function App() {
    return (
        <div className={styles.app}>
            <div className={styles.header}>
                <Header />
            </div>
            <DomainList />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam tortor, dictum quis bibendum eget, aliquet vel lacus. Proin ut dui sem. Donec fringilla, risus id finibus vestibulum, mi risus mollis felis, nec iaculis dolor diam at diam. Aenean ligula dui, tempor at tellus in, ullamcorper suscipit odio. Etiam consectetur pretium elit ut fermentum. Curabitur vitae ullamcorper odio, non tempus enim. Nunc sollicitudin bibendum diam ut consectetur. Sed id sodales lectus. Donec at consectetur neque, id varius nulla. Nam sit amet molestie ipsum.

Nam ac ullamcorper justo, nec tristique enim. Integer aliquet odio sed augue blandit, ut congue dui ultricies. In id rhoncus ligula. Nam risus justo, facilisis sed sagittis non, blandit vel odio. Praesent dictum risus sit amet dolor porta luctus. Etiam elit tortor, vestibulum non magna nec, ultrices pellentesque sem. Ut consectetur pharetra neque, a congue eros mollis ac. Donec a massa at elit interdum interdum at vel purus. Quisque viverra lorem vel diam congue facilisis. Nullam ornare leo et odio viverra, eu accumsan libero fringilla. Morbi blandit euismod tempor. Vivamus vestibulum tempus diam ut lobortis. Nam pulvinar tellus quis vulputate eleifend. Mauris est nibh, faucibus ut justo a, tempus congue tellus.

Suspendisse at magna est. Nullam hendrerit odio vehicula leo pretium, commodo eleifend ligula tincidunt. Donec est justo, volutpat vitae purus et, porttitor bibendum neque. Etiam leo mi, mattis ac ante ut, egestas accumsan arcu. Sed vulputate arcu eget mi pretium pellentesque. Etiam volutpat sollicitudin viverra. Phasellus sit amet leo tristique, efficitur metus quis, dictum felis. Nulla pellentesque tellus malesuada nunc tincidunt malesuada. Duis malesuada suscipit nibh, ut ullamcorper risus blandit id. Praesent eleifend est nec dolor eleifend facilisis. Sed orci magna, vehicula non faucibus id, scelerisque eget massa.

Integer feugiat molestie ultrices. Duis suscipit malesuada nunc non consequat. Nam eros purus, laoreet eget dolor a, rhoncus congue enim. Vivamus nulla ipsum, finibus sit amet ex sed, suscipit fringilla nibh. Suspendisse porta aliquet aliquam. Phasellus dignissim, magna eu auctor pulvinar, libero ipsum lacinia urna, ut tristique felis velit vitae erat. Quisque vitae rutrum mi. Maecenas nec orci ligula. Proin sed vehicula massa, sit amet volutpat tellus. Fusce in diam dui. Aliquam in enim luctus, bibendum lorem sit amet, condimentum eros. Etiam pretium massa odio, eu rutrum libero luctus tristique. Proin non tincidunt risus. Praesent eu sem elit. Phasellus consequat risus ac vulputate rutrum.
        </div>
    );
}

export default App;
