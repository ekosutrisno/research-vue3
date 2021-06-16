const tooltipDirective = (app: any) => {
   app.directive("tooltip", {
      mounted(el: any, binding: any) {
         init(el, binding);
      },
      updated(el: any, binding: any) {
         init(el, binding);
      }
   });
};

function init(el: any, binding: any) {
   let position = binding.arg || "top";
   let tooltipText = binding.value || "Tooltip text";
   el.setAttribute("position", position);
   el.setAttribute("tooltip", tooltipText);
}

export default tooltipDirective;
