const slides = [
 {section:'مقدمة',title:'العرض ومحدداته ومرونته',points:['يتناول العرض الكميات التي يرغب المنتجون في بيعها.','يتكون الملخص من ثلاثة مباحث أساسية.','نبدأ بمفهوم العرض، ثم محدداته، ثم مرونته.'],lead:'ثلاثة مباحث لفهم قرارات المنتجين في السوق.'},
 {section:'المبحث الأول • العرض',title:'مفهوم العرض',points:['العرض هو الكميات التي يرغب المنتجون في بيعها عند أسعار مختلفة.','تتم دراسة العرض خلال فترة زمنية محددة.','تؤثر الأسعار والعوامل الأخرى في قرارات المنتجين.']},
 {section:'المبحث الأول • العرض',title:'قانون العرض',points:['توجد علاقة طردية بين السعر والكمية المعروضة.','عند ارتفاع السعر تزداد الكمية المعروضة غالبًا.','وعند انخفاض السعر تقل الكمية المعروضة، مع ثبات العوامل الأخرى.']},
 {section:'المبحث الأول • العرض',title:'أهمية السعر للمنتج',points:['السعر من العوامل الأساسية التي تؤثر في قرار الإنتاج.','ارتفاع السعر قد يزيد من ربحية السلعة.','انخفاض السعر قد يقلل رغبة المنتج في زيادة الإنتاج.']},
 {section:'المبحث الأول • العرض',title:'جدول العرض',points:['يوضح جدول العرض العلاقة بين السعر والكمية المعروضة.','يسجل الكمية التي يرغب المنتج في بيعها عند كل سعر.','يمكن استخدام الجدول لرسم منحنى العرض.']},
 {section:'المبحث الأول • العرض',title:'منحنى العرض',points:['يمثل منحنى العرض العلاقة بين السعر والكمية المعروضة بيانيًا.','يوضع السعر عادة على المحور الرأسي والكمية على الأفقي.','يميل المنحنى غالبًا إلى أعلى من اليسار إلى اليمين.']},
 {section:'المبحث الأول • العرض',title:'التغير في الكمية المعروضة',points:['يحدث عند تغير سعر السلعة نفسها.','ارتفاع السعر يؤدي إلى التحرك لأعلى على منحنى العرض.','انخفاض السعر يؤدي إلى التحرك لأسفل على المنحنى.']},
 {section:'المبحث الثاني • محددات العرض',title:'مفهوم محددات العرض',points:['هي العوامل التي تؤثر في الكميات التي يرغب المنتجون في بيعها.','يمكن أن تؤدي إلى زيادة العرض أو انخفاضه.','تؤثر هذه العوامل في العرض حتى مع ثبات سعر السلعة.']},
 {section:'المبحث الثاني • محددات العرض',title:'أسعار عناصر الإنتاج',points:['تشمل عناصر الإنتاج العمل والمواد الخام والطاقة.','ارتفاع تكاليف الإنتاج قد يؤدي إلى انخفاض العرض.','انخفاض التكاليف قد يشجع المنتجين على زيادة الإنتاج.']},
 {section:'المبحث الثاني • محددات العرض',title:'التكنولوجيا',points:['تساعد التكنولوجيا على تطوير طرق الإنتاج.','قد تؤدي إلى زيادة الإنتاج وخفض تكلفة الوحدة.','لذلك يمكن أن تؤدي التطورات التقنية إلى زيادة العرض.']},
 {section:'المبحث الثاني • محددات العرض',title:'الضرائب والإعانات',points:['قد تؤدي الضرائب إلى زيادة تكاليف الإنتاج.','ارتفاع التكاليف قد يقلل الكميات المعروضة.','الإعانات قد تخفض التكلفة وتشجع على زيادة العرض.']},
 {section:'المبحث الثاني • محددات العرض',title:'عدد المنتجين',points:['زيادة عدد المنتجين في السوق قد تزيد العرض الكلي.','خروج بعض المنتجين قد يؤدي إلى انخفاض العرض.','يتوقف الأثر على ظروف السوق والإنتاج.']},
 {section:'المبحث الثاني • محددات العرض',title:'أسعار السلع الأخرى',points:['قد يغير المنتج نوع السلعة التي ينتجها وفقًا للربحية.','ارتفاع ربحية سلعة أخرى قد يقلل إنتاج السلعة الحالية.','تؤثر العلاقة بين السلع في قرارات المنتجين.']},
 {section:'المبحث الثاني • محددات العرض',title:'انتقال منحنى العرض',points:['زيادة العرض تؤدي إلى انتقال المنحنى إلى اليمين.','نقص العرض يؤدي إلى انتقال المنحنى إلى اليسار.','يحدث الانتقال بسبب تغير محددات العرض وليس السعر وحده.']},
 {section:'المبحث الثالث • مرونة العرض',title:'مفهوم مرونة العرض',points:['تقيس مرونة العرض مدى استجابة الكمية المعروضة للتغير في السعر.','كلما زادت استجابة الكمية للتغير في السعر زادت المرونة.','تساعد المرونة على فهم استجابة المنتجين في السوق.']},
 {section:'المبحث الثالث • مرونة العرض',title:'قانون مرونة العرض',points:['مرونة العرض = نسبة التغير في الكمية المعروضة ÷ نسبة التغير في السعر.','تُستخدم النسب المئوية للتغير في حساب المرونة.','توضح النتيجة مدى استجابة الكمية المعروضة لتغير السعر.'],formula:'مرونة العرض = % التغير في الكمية المعروضة ÷ % التغير في السعر'},
 {section:'المبحث الثالث • مرونة العرض',title:'العرض المرن',points:['يكون العرض مرنًا عندما تستجيب الكمية بدرجة كبيرة لتغير السعر.','تكون نسبة التغير في الكمية أكبر من نسبة التغير في السعر.','تساعد سهولة زيادة الإنتاج على ارتفاع المرونة.']},
 {section:'المبحث الثالث • مرونة العرض',title:'العرض غير المرن',points:['يكون العرض غير مرن عندما تكون استجابة الكمية محدودة.','تكون نسبة التغير في الكمية أقل من نسبة التغير في السعر.','قد يحدث ذلك بسبب صعوبة زيادة الإنتاج بسرعة.']},
 {section:'المبحث الثالث • مرونة العرض',title:'العرض متكافئ المرونة',points:['تكون مرونة العرض مساوية للواحد الصحيح.','تتساوى نسبة التغير في الكمية مع نسبة التغير في السعر.','توضح هذه الحالة استجابة متناسبة بين الكمية والسعر.']},
 {section:'المبحث الثالث • مرونة العرض',title:'العوامل المؤثرة في المرونة',points:['الفترة الزمنية المتاحة لتعديل الإنتاج.','توافر المواد الخام والطاقة الإنتاجية.','سهولة تخزين السلعة وتوفير مستلزمات إنتاجها.']},
 {section:'الخاتمة',title:'مراجعة أهم الأفكار',points:['العرض يوضح العلاقة بين السعر والكمية التي يرغب المنتجون في بيعها.','محددات العرض تؤدي إلى انتقال منحنى العرض.','مرونة العرض تقيس مدى استجابة الكمية المعروضة للتغير في السعر.'],lead:'خلاصة المباحث الثلاثة في نقاط واضحة.'},
 {section:'فريق العمل',title:'أعضاء المشروع',team:true}
];
const team = ['زياد أيمن','شادي محمد','دينا جرج','زينب محمد','شهد أبو بكر','رودينا','  عبد الرحمن مصطفي'];
let current = 0, animating = false;
const $ = id => document.getElementById(id);
const slideNode = $('slide'), mask = $('transitionMask');
function render(index){
 if(animating || index===current && slideNode.dataset.ready==='yes') return;
 index = Math.max(0,Math.min(slides.length-1,index)); animating=true;
 mask.classList.remove('active'); void mask.offsetWidth; mask.classList.add('active');
 setTimeout(()=>{
   current=index; const s=slides[current];
   $('sectionLabel').textContent=s.section; $('counter').textContent=`${String(current+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
   $('chapterNumber').textContent=String(current+1).padStart(2,'0');
   const percent=Math.round((current+1)/slides.length*100); $('progressPercent').textContent=`${percent}%`; $('progressBar').style.width=`${percent}%`;
   $('prev').disabled=current===0; $('next').disabled=current===slides.length-1;
   if(s.team){
     slideNode.className='slide team-slide';
     slideNode.innerHTML=`<div class="eyebrow"><span class="eyebrow-line"></span><span>ختام العرض</span><span class="eyebrow-line"></span></div><h1 class="team-heading">${s.title}</h1><p class="doctor-line">إشراف الدكتور <strong>أحمد حمدي هاشم</strong></p><p class="designer-line">تصميم وإعداد العرض: <strong>عبدالرحمن مصطفى</strong></p><div class="team-grid">${team.map((name,i)=>`<div class="person"><div class="avatar">${name==='اسم العضو الثامن'?'＋':name.charAt(0)}</div><h3>${name}</h3><small>${name==='  عبدالرحمن مصطفي'?'أضف الاسم هنا':'عضو فريق المشروع'}</small></div>`).join('')}</div><p class="end-note">شكرًا لحسن الاستماع</p>`;
   } else {
     slideNode.className='slide';
     const title=s.title.replace(/(العرض|مرونة العرض|محددات العرض)/g,'<span class="gold">$1</span>');
     slideNode.innerHTML=`<div class="eyebrow"><span class="eyebrow-line"></span><span>${s.section}</span></div><h1>${title}</h1>${s.lead?`<p class="lead">${s.lead}</p>`:''}<div class="points">${s.points.map((p,i)=>`<div class="point"><span class="point-num">${String(i+1).padStart(2,'0')}</span><p>${p}</p></div>`).join('')}</div>${s.formula?`<div class="formula"><span>${s.formula}</span></div>`:''}`;
   }
   slideNode.dataset.ready='yes';
   setTimeout(()=>{mask.classList.remove('active');animating=false;},480);
 },300);
}
$('prev').addEventListener('click',()=>render(current-1)); $('next').addEventListener('click',()=>render(current+1));
$('fullscreen').addEventListener('click',()=>{if(!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.();});
document.addEventListener('keydown',e=>{if(['ArrowLeft','PageDown',' '].includes(e.key)){e.preventDefault();render(current+1)}else if(['ArrowRight','PageUp'].includes(e.key)){e.preventDefault();render(current-1)}else if(e.key==='Home')render(0);else if(e.key==='End')render(slides.length-1)});
render(0);
