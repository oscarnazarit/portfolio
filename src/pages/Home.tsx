import '../styles/home.css';

function Home()
{
	return (
	<div className="page-layout">
		<h2>
			Welcome <br/>My name is Oscar Nazarit<br/> I am a Software Engineering student at Iowa State University <br/>I have a passion for learning, specifically with tech
		</h2>
		<p>
			Apart from learning about the history of technology, <br/> I enjoy a mix of web development and learning how to leverage new technologies. <br/> <br/>
			Some of the tools I've used: 
		</p>
		<table>
			<tr>
				<td>
					React.js
				</td>
				<td>
					Next.js
				</td>
				<td>
					Vite
				</td>
			</tr>
			<tr>
				<td>
					C
				</td>
				<td>
					Python
				</td>	
				<td>
					Android
				</td>
			</tr>
		</table>
		<footer>
			<ul>
				<li>
					Oscar Nazarit 2025 
				</li>
				<li>
					Email
				</li>
				<li>
					Github
				</li>
				
			</ul>
		</footer>
		
	</div>);
}

export default Home;