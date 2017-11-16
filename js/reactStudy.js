/**
 * Created by MHC on 2017/11/16.
 */
import React from 'react';
import {DatePicker, notification} from 'antd';

export default class ReactStudy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            key:1
        }
    }

    onChange=(key)=>{
        //console.log(e.target);
        return (e)=>{
            console.log(key);
            if(Number(e.target.value)){
                this.setState({
                    value:e.target.value,
                    key
                })
            }else{
                notification['error']({
                    message:'输入错误',
                    description:'请输入数字！！！'
                })
            }
        }
    }
    //onChange1=(e)=>{
    //    console.log(e.target);
    //    if(Number(e.target.value)){
    //        this.setState({
    //            value:e.target.value,
    //            key:2
    //        })
    //    }else{
    //        console.log('请输入数字!!!')
    //    }
    //}
    //onChange2=(e)=>{
    //    console.log(e.target);
    //    console.log(Number(e.target.value));
    //    if(Number(e.target.value)){
    //        this.setState({
    //            value:e.target.value,
    //            key:2
    //        })
    //    }else{
    //        console.log('请输入数字!!!')
    //    }
    //}

    render(){
        const {value,key} = this.state;
        return(
            <div>
                <h1>ReactStudy</h1>
                <DatePicker></DatePicker>
                <br/><br/><br/>
                <h1>stateUp</h1>
                <h3>input1*2=input2</h3>
                <h1>{'Total='+(key==1?value*3:value*1.5)}</h1>
                {/*
                 <TemplateInput value={value==''?'':key==1?value:value/2} onChange={this.onChange1} placeholder="input1"></TemplateInput>
                 <TemplateInput value={value==''?'':key==2?value:value*2} onChange={this.onChange2} placeholder="input2"></TemplateInput>
                 */}
                <TemplateInput value={value==''?'':key==1?value:value/2} onChange={this.onChange(1)} placeholder='input1' ></TemplateInput>
                <TemplateInput value={value==''?'':key==2?value:value*2} onChange={this.onChange(2)} placeholder='input2'  ></TemplateInput>

            </div>
        );
    }
}

class TemplateInput extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {placeholder,value,onChange} = this.props;
        return(
            <div>
                <input type="text" value={value} onChange={onChange} placeholder={placeholder}/>
            </div>
        );
    }
}