{strip}
<div class="layout-header__similar"></div>

<header class="layout-header" itemscope="itemscope" itemtype="http://schema.org/WPHeader">

	<a href="/action" class="action-sticker j-navigation">
	    <span class="action-sticker__text">АКЦИЯ!</span>
	</a>

	<div class="layout-header__container">
		<div class="layout-header__wrapper layout">

			<a href="/" class="layout-header__logo logo j-navigation" rel="home" itemprop="url" accesskey="1" data-instant>
				<span itemprop="name">{unit item='11'}</span>
			</a>
			
			{$accesskey = 1}

			{if isset($_sitemenu.main) nocache}
			<nav class="navigation" role="navigation" id="navigation">
			    <ul class="navigation__list">
					{foreach $_sitemenu.main as $e}{$accesskey = $accesskey + 1}
						<li class="navigation__item" itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement">
				            <a href="{$e.link}" itemprop="url" accesskey="{$accesskey}" class="navigation__link j-navigation">
				                <span class="navigation__link__name" itemprop="name">{$e.name}</span>
				            </a>
				        </li>
					{/foreach}
				</ul>
			</nav>
			{/if}

			{unit item='10'}

		</div>
	</div>
</header>
{/strip}
