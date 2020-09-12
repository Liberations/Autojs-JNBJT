auto.waitFor();
var path = "./main_land.js";
if(!files.exists(path)){
    toast("脚本文件不存在: " + path);
    exit();
}
events.observeKey();
events.on("key", function(keyCode, event){
    if(keyCode == keys.volume_down  && event.getAction() == event.ACTION_UP){
        if(execution){
            execution.getEngine().forceStop();
            toast("已停止");
        }else{
            toast("脚本还未运行");
        }
    
        window.action.setText('开始运行');
    }
    if(keyCode == keys.volume_up  && event.getAction() == event.ACTION_UP){
        engines.stopAll();
        toast("已停止");
        if(window){
            window.close();
        }
    }
});


var window = floaty.rawWindow(
    <vertical >
         <text id="tip1" autoLink="web" text="1.请确保江南百景图处于后台并且按教程示意移动到指定位置" gravity="left" textColor="red" bg="#1e1e1e" textSize="15sp"/>
         <text id="tip1" text="2.本脚本需要 *悬浮窗权限* 以及手动开启 *无障碍模式* " gravity="left" textColor="red"  bg="#1e1e1e" textSize="15sp"/>
         <text id="tip1" text="3.结束运行按音量下键" gravity="left" textColor="red" bg="#1e1e1e" textSize="15sp"/>
         <text id="tip1" text="4.重新激活请按音量上" gravity="left" textColor="red"  bg="#1e1e1e" textSize="15sp"/>
         <button id="source" text="软件开源代码" textColor="#ffffff" bg="#428983" textSize="20sp"/>
         <button id="shui" text="水井布局示意图" textColor="#ffffff" bg="#428983" textSize="20sp"/>
         <button id="action" text="开始运行" textColor="#ffffff" bg="#428983" textSize="20sp"/>
    </vertical>
);

var execution = null;
window.action.click(()=>{
    window.close();
    execution = engines.execScriptFile(path);
});
window.shui.click(()=>{
    app.openUrl("https://s1.ax1x.com/2020/09/11/wtEAU0.jpg")
});
window.source.click(()=>{
    app.openUrl("https://github.com/Liberations/Autojs-JNBJT")
});