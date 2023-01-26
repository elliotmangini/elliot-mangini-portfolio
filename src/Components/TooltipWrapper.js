


export default function TooltipWrapper({ tooltip, child }) {
    function updateTooltip(mouseEvent) {
      // Move tooltip to our current cursor position
      tooltip.style.top = mouseEvent.pageY+"px"
      tooltip.style.left = mouseEvent.pageX+"px"
  
      switch(mouseEvent.type) {
      case "mouseenter":
          // update text and show tooltip when we hover
          tooltip.innerHTML = this.getAttribute("tooltip")
          tooltip.style.visibility = "visible"
          break;
      case "mouseleave":
          // hide the tooltip when we are no longer above a tooltip element
          tooltip.style.visibility = "hidden"
          break;
      }
  }
  
    return (
      <div tooltip={tooltip} onMouseEnter={updateTooltip} onMouseMove={updateTooltip} onMouseLeave={updateTooltip}>
        {child}
      </div>
    );
  }