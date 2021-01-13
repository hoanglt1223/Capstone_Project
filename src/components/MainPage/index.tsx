import styles from './mainPage.module.scss'
import SearchBar from './components/SearchBar'
import ToolsBar from './components/ToolBars'
import React from 'react'
import CssPropsField from './components/cssPropsField'
import GlobalPropsField from './components/globalPropsField'
import SignUpForm from '../SignUpForm'
const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ToolsBar></ToolsBar>
      </div>
      <div className={styles.navbar}>
        <SearchBar></SearchBar>
      </div>
      <div className={styles.componentCssProps} id="ComponentCssProps">
        <CssPropsField />
      </div>
      <div className={styles.globalProps} id="GlobalProps">
        <GlobalPropsField />
      </div>
      <div className={styles.adsContainer} id="AdsContainer"></div>
      <div className={styles.publishGroup} id="PublishGroup"></div>
      <div className={styles.playGround} id="PlayGround">
        <SignUpForm />
      </div>
      <div className={styles.sourceTree} id="SourceTree"></div>
      <div className={styles.library} id="Library"></div>
    </div>
  )
}

export default MainPage
