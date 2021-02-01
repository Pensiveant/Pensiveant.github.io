import React from 'react';
import styles from './App.less';

let contentList = [{
  title: '博客（blog）',
  url: './blog'
}, {
  title: 'ArcGIS开发',
  url: './arcgis'
}]
function App() {

  return (
    <div className={styles.app}>
      <div className={styles.contentPannel}>
        <div className={styles.title}>
          <p> Pensiveant的个人网站</p>
        </div>
        <div className={styles.contentList}>
          {contentList.map((item) => {
            return (
              <div className={styles.item}>
                <a href={item.url}>{item.title}</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
