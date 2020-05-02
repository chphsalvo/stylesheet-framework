# Front-end framework
Front-end framework by Christopher Salvo

<ul>
  <li>Consistency between overall quality of the projects</li>
  <li>Full control and light customizable</li>
  <li>Avoidance of code and style redundancies</li>  
</ul>

<h2>Installation</h2>
<p>CDN CSS &lt;link&gt;</p>
<pre>
  <code>
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://cdn.jsdelivr.net/gh/chphsalvo/front-end-framework@0.1-alpha/style.min.css&quot;&gt;
  </code>
</pre>
<p>CDN URL</p>
<pre>
  <code>
    https://cdn.jsdelivr.net/gh/chphsalvo/front-end-framework@0.1-alpha/style.min.css
  </code>
</pre>

<h2>Run project</h2>
<pre>
  <code>
    # Install
    git clone https://github.com/chphsalvo/front-end-framework.git
    cd front-end-framework
    npm install
    <br>
    # Watch
    npm run watch
   	<br>
    # Deploy
    npm run build
  </code>
</pre>

<h2>Code base structure</h2>
<pre>
  <code>
Project Root
└── dist				# Compiled files, build distribution folder
    └── css
        ├── style.css			# Compiled style.
        ├── style.css.map		# Compiled style sourcemap.
        ├── style.min.css		# Compressed compiled style.
        └── style.min.css.map		# Compressed compiled style sourcemap.
    
└── src					# Source files
    └── sass
        └── components
	    ├── _background.scss
	    ├── _buttons.scss
	    ├── _forms.scss
	    └── _modals.scss
        └── grid
            ├── _grid.scss
            └── _gridFlex.scss
        └── import
            └── _import.scss		# Import .scss list
        └── mixin			# SASS mixin (https://scotch.io/tutorials/how-to-use-sass-mixins)
            ├── _color.scss
            └── _responsive.scss
        └── settings
    	    ├── _breakpoints.scss
            └── _colors.scss
        └── typography
    	    └── _typography.scss
        └── utilities
    	    ├── _functionalCSS.scss
            ├── _reset.scss		# Browser CSS reset
            └── _utilities.scss
    └── style.scss
  </code>
</pre>

<h2>Don’ts & Do’s</h2>
<table>
	<thead>
    	<tr>
			<th>Don’ts</th>
			<th>Do’s</th>
		</tr>
	</thead>
<tbody>
	<tr>
		<td>Don't use spaces for indentation.</td>
		<td>Do use tabs for indentation.</td>
	</tr>
</tbody>
</table>

<h2>Best Practices</h2>
<table>
	<thead>
    	<tr>
			<th>Best Practices</th>
			<th>Example</th>
		</tr>
	</thead>
<tbody>
	<tr>
		<td>Write multiple selectors on separate lines.</td>
		<td>
        	<pre>
        		<code>
        		<br>.btn,<br>.btn--link {<br>}
            	</code>
			</pre>
		</td>
	</tr>
    <tr>
		<td>Write hex values in lowercase.</td>
		<td>
        	#3d3d3d vs. <s>#3D3D3D</s>
		</td>
	</tr>
</tbody>
</table>
