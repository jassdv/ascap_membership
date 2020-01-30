<template>
<div class="input-container dropdown my-2">
    <label>Publisher Company Type</label>
    <div class="dropdown bootstrap-select validation-error">
        <button type="button" role="button" class="btn dropdown-toggle">
            <span class="filter-option"></span>
        </button>
        <div class="dropdown-menu open">
            <ul role="menu" class="dropdown-menu inner">
                <li>
                    <a tabindex="0" class="quaver-dropdown-option">
                        <span>Individual /&#8203; Sole proprietor or Single-member LLC</span>
                    </a>
                </li>
                <li>
                    <a tabindex="0" class="quaver-dropdown-option">
                        <span>C Corporation</span>
                    </a>
                </li>
                <li>
                    <a tabindex="0" class="quaver-dropdown-option">
                        <span>S Corporation</span>
                    </a>
                </li>
                <li>
                    <a tabindex="0" class="quaver-dropdown-option">
                        <span>LLC - C Corporation</span>
                    </a>
                </li>
                <li>
                    <a tabindex="0" class="quaver-dropdown-option">
                        <span>LLC - S Corporation</span>
                    </a>
                </li>
                <li>
                    <a tabindex="0" class="quaver-dropdown-option">
                        <span>LLC - Partnership</span>
                    </a>
                </li>
                <li>
                    <a tabindex="0" class="quaver-dropdown-option">
                        <span>Partnership</span>
                    </a>
                </li>
                <li>
                    <a tabindex="0" class="quaver-dropdown-option">
                        <span>Trust /&#8203; Estate</span>
                    </a>
                </li>
                <li>
                    <a tabindex="0" class="quaver-dropdown-option">
                        <span>OTHER</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <span class="validation-error-text">Please select your publisher company type.</span>
</div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>