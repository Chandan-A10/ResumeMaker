import React from 'react'
import styles from './Toolbar.module.css'
import { Button, Tooltip } from 'antd'
import { SaveOutlined, DiffOutlined, VerticalAlignBottomOutlined, ClearOutlined, CloseOutlined } from '@ant-design/icons'

const Toolbar=(props) => {
  const handleCancel=()=>{
    props.handleCancel()
  }
  const handleReset=()=>{
    props.handleReset()
  }
  const handleSave=()=>{
    console.log(props)
    props.handleSave()
  }
  const handleSaveDraft=()=>{
    console.log(props)
    props.handleSaveDraft()
  }
  const handleExport=()=>{
    props.handleExportToPDF()
  }
  return (
    <div className={styles.container}>
        <Tooltip title='Cancel'>
            <Button icon={ <CloseOutlined />} onClick={handleCancel} size='large'/>
        </Tooltip>

        <Tooltip title='Save'>
        <Button icon={<SaveOutlined />} onClick={handleSave} size='large'/>
        </Tooltip>

        <Tooltip title='Save as Draft' onClick={handleSaveDraft}>
        <Button icon={<DiffOutlined />} size='large'/>

        </Tooltip>
        <Tooltip title='Reset Fields' onClick={handleReset}>
        <Button icon={<ClearOutlined />} size='large'/>

        </Tooltip>
        <Tooltip title='Export as PDF' >
        <Button icon={ <VerticalAlignBottomOutlined /> } onClick={handleExport} size='large'/>

        </Tooltip>
    </div>
  )
}

export default Toolbar