
function clickEvent(__arrayStruct=[]){


	let __iMax=__arrayStruct.length;
	for(let __i=0;__i<__iMax;__i++)
	{
		var __struct=__arrayStruct[__i];

		const __parent=__struct.parent;
		const __classClick=__struct.classClick;
		const __classTarget=__struct.classTarget;
		const __classAdd=__struct.classAdd;
		const __classDelete=__struct.classDelete;
		const __isRadio=__struct.isRadio;
		const __isClickOtherRemoveClass=__struct.isClickOtherRemoveClass;
		const __onClick=__struct.onClick;

		const parent = document.querySelector(__parent);
		
		if(parent==null)
		{continue;}

		const click = parent.querySelectorAll(__classClick);
		const target = parent.querySelectorAll(__classTarget);

		if(__isRadio==true)
		{
			click.forEach(btn=>{
				btn.addEventListener('click',()=>{
					target.forEach(btn=>{
						const info = btn;
						if(info==null)
						{return;}
						info.classList.remove(__classAdd);
						console.log(__classAdd);
					});
				});
			});
		}

		click.forEach((btn,index)=>{

			const __target=target[index];

			if(__target==null)
			{return;}

			if(__isClickOtherRemoveClass==true)
			{
				document.addEventListener('click', function(event) {
					if(btn.contains(event.target)==false)
					if(__target.contains(event.target)==false)
					if(__target.classList.contains(__classAdd)==true) 
					{__target.classList.remove(__classAdd);}
				});
			}

			btn.addEventListener('click',()=>{
				if(__classDelete!="")
				if(__target.classList.contains(__classDelete)==true)
				{
					__target.classList.remove(__classDelete);
				}
				if(__classAdd!="")
				{
					if(__target.classList.contains(__classAdd)==true)
					{
						__target.classList.remove(__classAdd);
					}
					else
					{__target.classList.add(__classAdd);}
				}
				console.log(__classTarget);
				console.log(__classClick);
				console.log(__onClick);
				if(__onClick!=undefined)
				{__onClick();}
			})
		})
	}

}

// 모든 버튼을 선택합니다.
const buttons = document.querySelectorAll(".tab-category >button");

// 각 버튼에 대해 반복하여 이벤트 리스너를 추가합니다.
buttons.forEach(function(button) {
  	button.addEventListener("click", ()=>{
		scrollToTarget(event,button);
	});
});



function scrollToTarget(event,button) {
	event.preventDefault();

	const header=document.querySelector(".header");
	const anchor=button.querySelector(".anchor-link");
	const target = document.querySelector(anchor.getAttribute("href"));


	let marginTop = parseInt( window.getComputedStyle(target).marginTop, 10);
	marginTop=Math.min(marginTop,24);


	const position = target.offsetTop - button.offsetHeight  - header.offsetHeight - marginTop;
	
	console.log([target.offsetTop,button.offsetTop,button.offsetHeight,header.offsetHeight - marginTop,position]);

	window.scrollTo({
		top: position,
		behavior: "smooth",
	});
}
