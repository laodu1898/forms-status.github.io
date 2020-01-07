        var spans=document.getElementsByTagName("span");
        var forms=document.getElementById("form");
        var inputs=forms.getElementsByTagName("input");
        var present=forms.getElementsByClassName("present");
        var present1=forms.getElementsByClassName("present-1");
        var singles=forms.getElementsByClassName("single");
        var square=forms.getElementsByClassName("square");
    	var submit=document.getElementById("submit");
    	var confirm=[false,false,false,false,false,false,false,false,false]
        //各个需要验证的正则实例函数 
        var reg=[/^[a-z]\w{6,30}$/i,//账号验证
                 /[a-zA-Z]{6,20}/,//密码字母验证
                 /\d[6,20]/,//密码数字验证
                 /\S[6,20]/,//密码符号验证
                 /^[a-zA-Z]{3,30}$|^[\u4e00-\u9fa5]{2,15}$/,//中英文名验证
                 /^\d{17}[x]$/i,//身份证号码验证
                 /^\w+@\w+\.[a-zA-Z_]{2,4}$/i,//邮箱验证
                 /^\d{11}$///电话号码验证
            ];
        var str=["用户名输入正确",
                "再次输入一致",
                "姓名输入正确",
                "号码输入正确",
                "邮箱格式正确",
                "手机格式正确"
            ];
        <!-- input失去焦点之后进行验证 -->
        inputs[0].onblur=function(){
            if(this.value==""){present[0].innerHTML="用户名不能为空";present[0].style.display="block"}else if (!reg[0].exec(this.value)) {present[0].style.display="block"}
            else{confirm[0]=true;present[0].innerHTML="用户名输入正确";present[0].style.color="green";present[0].style.display="block";};
        };
        //对密码强弱程度进行判定
        //方形框显现
        var squareblock=function(){square[0].style.display="inline-block"};
        //弱密码变色
        var single=function(){singles[0].style.background="red";squareblock()};
        //中等密码变色
        var middle=function(){singles[0].style.background="red";singles[1].style.background="yellow";squareblock()};
        //高等密码变色
        var high=function(){singles[0].style.background="red";singles[1].style.background="yellow";singles[2].style.background="blue";squareblock()};
        var blue=function(){ 
            if (/\W[0-9a-zA-Z]*/.test(inputs[1].value)) {high();confirm[1]=true}
            else{present1[0].style.display="block"}
        };
        var yellow=function(){
            if (/^[1-9|a-z]{6,20}$/.exec(inputs[1].value)||/^[\W|a-z]{6,20}$/.exec(inputs[1].value)||/^[\W|1-9]{6,20}$/.exec(inputs[1].value)) 
            {middle();confirm[1]=true}
            else{blue()};
        };
        var red=function(){
            if (/^[1-9]{6,20}$/.exec(inputs[1].value)||/^[a-zA-Z]{6,20}$/.exec(inputs[1].value)||/^\W{6,20}$/.exec(inputs[1].value)) {single();confirm[1]=true}
            else{yellow()};
        };        
        inputs[1].onblur=function(){
            red();
            if(this.value==""){present1[0].innerHTML="密码不能为空";present1[0].style.display="block"};
        };
        inputs[2].onblur=function(){
            if(this.value==""){present[2].innerHTML="密码不能为空";present[2].style.display="block"}
            else if (inputs[2].value!==inputs[1].value) 
            {present[2].style.display="block"}
            else {confirm[2]=true};present[2].innerHTML="两次输入一致";present[2].style.color="green";present[2].style.display="block";
        };
        inputs[3].onblur=function(){
            if(this.value==""){present[3].innerHTML="姓名不能为空";present[3].style.display="block"}
            else if (!reg[4].exec(this.value)) {present[3].style.display="block"}
            else{confirm[3]=true;present[3].innerHTML="姓名输入正确";present[3].style.color="green";present[3].style.display="block";};
        };
        inputs[4].onblur=function(){
            if(this.value==""){present[4].innerHTML="身份证号码不能为空";present[4].style.display="block"}
            else if (!reg[5].exec(this.value)) {present[4].style.display="block"}
            else{confirm[4]=true;present[4].innerHTML="身份证号码输入正确";present[4].style.color="green";present[4].style.display="block";};
        };
        inputs[5].onblur=function(){
            if(this.value==""){present[5].innerHTML="邮箱不能为空";present[5].style.display="block"}
            else if (!reg[6].exec(this.value)) {present[5].style.display="block"}
            else{confirm[5]=true;present[5].innerHTML="邮箱格式正确";present[5].style.color="green";present[5].style.display="block";};
        };
        inputs[6].onblur=function(){
            if(this.value==""){present[6].innerHTML="电话号码不能为空";present[6].style.display="block"}
            else if (!reg[7].exec(this.value)) {present[6].style.display="block"}
            else{confirm[6]=true;present[6].innerHTML="手机格式正确";present[6].style.color="green";present[6].style.display="block";};
        };


        submit.onclick=function(){
            if (confirm[0]==true&&confirm[1]==true&&confirm[2]==true&&confirm[3]==true&&confirm[5]==true&&confirm[6]==true) {
                window.location.href="https://www.imooc.com/";
            }
        };