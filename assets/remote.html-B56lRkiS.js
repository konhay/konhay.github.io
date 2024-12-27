import{_ as e,c as n,d as a,o as i}from"./app-ZjO2BkoD.js";const l={};function t(r,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h1 id="centos7远程桌面配置" tabindex="-1"><a class="header-anchor" href="#centos7远程桌面配置"><span>Centos7远程桌面配置</span></a></h1><h2 id="xmanager5" tabindex="-1"><a class="header-anchor" href="#xmanager5"><span>Xmanager5</span></a></h2><ul><li>Centos7 gdm进行了改进，Xmanger 5支持不了。需要先卸载gdm，将系统的桌面管理换成ligthgdm，并安装xface方可。我的centos 7种子系统是没有安装gdm的，也没有安装telnet，且默认是开启防火墙的。（参考：http://blog.csdn.net/junbujianwpl/article/details/52801952）</li><li>PS：不建议使用Xmanger 。建议使用vnc。</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>root@rac1 ~<span class="token punctuation">]</span><span class="token comment"># yum install epel-release</span></span>
<span class="line"><span class="token punctuation">[</span>root@rac1 ~<span class="token punctuation">]</span><span class="token comment"># yum install lightdm</span></span>
<span class="line"><span class="token punctuation">[</span>root@rac1 ~<span class="token punctuation">]</span><span class="token comment"># rpm -a -q |grep light    # |grep dm</span></span>
<span class="line">lightdm-kde-0.3.2.1-12.el7.x86_64</span>
<span class="line">lightdm-qt-1.10.6-4.el7.x86_64</span>
<span class="line">lightdm-gobject-1.10.6-4.el7.x86_64</span>
<span class="line">lightdm-1.10.6-4.el7.x86_64</span>
<span class="line"><span class="token punctuation">[</span>root@rac1 ~<span class="token punctuation">]</span><span class="token comment">#</span></span>
<span class="line"><span class="token punctuation">[</span>root@rac1 ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/lightdm/lightdm.conf</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>XDMCPServer<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">enabled</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">177</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>root@rac1 ~<span class="token punctuation">]</span><span class="token comment"># systemctl disable gdm	#如果已经安装了gdm</span></span>
<span class="line"><span class="token punctuation">[</span>root@rac1 ~<span class="token punctuation">]</span><span class="token comment"># systemctl enable lightdm</span></span>
<span class="line"><span class="token punctuation">[</span>root@rac1 ~<span class="token punctuation">]</span><span class="token comment"># systemctl stop firewalld.service	#关闭防火墙，或自行开启177端口</span></span>
<span class="line"><span class="token punctuation">[</span>root@rac1 ~<span class="token punctuation">]</span><span class="token comment"># systemctl start lightdm	#无论lightdm是否启动成功，都不影响以xfce方式创建桌面</span></span>
<span class="line"><span class="token punctuation">[</span>root@rac1 ~<span class="token punctuation">]</span><span class="token comment">#</span></span>
<span class="line"><span class="token punctuation">[</span>root@rac1 ~<span class="token punctuation">]</span><span class="token comment"># sudo yum groupinstall xfce</span></span>
<span class="line"><span class="token punctuation">[</span>root@rac1 ~<span class="token punctuation">]</span><span class="token comment">#</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new-xstart-session" tabindex="-1"><a class="header-anchor" href="#new-xstart-session"><span>new Xstart session</span></a></h3><ul><li>协议：ssh</li><li>注册命令（xfce）：/usr/bin/xfce4-session</li></ul><h3 id="to-dispaly" tabindex="-1"><a class="header-anchor" href="#to-dispaly"><span>to DISPALY</span></a></h3><div class="language-SHELL line-numbers-mode" data-highlighter="prismjs" data-ext="SHELL" data-title="SHELL"><pre><code><span class="line">[root@rac2 ~]# xhost +</span>
<span class="line">access control disabled, clients can connect from any host</span>
<span class="line">[root@rac2 ~]# su - oracle</span>
<span class="line">[oracle@rac2 ~]$ export DISPALY=192.168.1.22:0.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vnc" tabindex="-1"><a class="header-anchor" href="#vnc"><span>VNC</span></a></h2><h3 id="install-rpm" tabindex="-1"><a class="header-anchor" href="#install-rpm"><span>install rpm</span></a></h3><div class="language-SHELL line-numbers-mode" data-highlighter="prismjs" data-ext="SHELL" data-title="SHELL"><pre><code><span class="line">[root@informatica ~]# yum check-update</span>
<span class="line">[root@informatica ~]# yum groupinstall &quot;X Window System&quot;</span>
<span class="line">[root@informatica ~]# yum install gnome-classic-session gnome-terminal nautilus-open-terminal control-center liberation-mono-fonts</span>
<span class="line">[root@informatica ~]# yum install vnc vnc-server</span>
<span class="line">[root@informatica ~]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new-desktop-kettle-as-example" tabindex="-1"><a class="header-anchor" href="#new-desktop-kettle-as-example"><span>new desktop(kettle as example)</span></a></h3><ul><li>method 1 (auto_user)</li></ul><div class="language-SHELL line-numbers-mode" data-highlighter="prismjs" data-ext="SHELL" data-title="SHELL"><pre><code><span class="line">[root@informatica ~]# su kettle</span>
<span class="line">[kettle@informatica root]$ vncserver</span>
<span class="line"></span>
<span class="line">You will require a password to access your desktops.	#Password must be at least 6 characters - &quot;desktop&quot;</span>
<span class="line"></span>
<span class="line">Password:</span>
<span class="line">Verify:</span>
<span class="line">xauth:  file /home/kettle/.Xauthority does not exist</span>
<span class="line"></span>
<span class="line">New &#39;informatica:10 (kettle)&#39; desktop is informatica:10		#得到kettle的桌面随机编号10</span>
<span class="line"></span>
<span class="line">Creating default startup script /home/kettle/.vnc/xstartup</span>
<span class="line">Starting applications specified in /home/kettle/.vnc/xstartup</span>
<span class="line">Log file is /home/kettle/.vnc/informatica:10.log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>method 2 (manual_root)</li></ul><div class="language-SHELL line-numbers-mode" data-highlighter="prismjs" data-ext="SHELL" data-title="SHELL"><pre><code><span class="line">[root@informatica ~]# cp /lib/systemd/system/vncserver@.service /etc/systemd/system/vncserver@:10.service   #any number</span>
<span class="line">[root@informatica ~]# vi /etc/systemd/system/vncserver@:10.service    #&lt;USER&gt; -&gt; kettle</span>
<span class="line">[root@informatica ~]# systemctl daemon-reload </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service-operations-must-root-in-etc-systemd-system" tabindex="-1"><a class="header-anchor" href="#service-operations-must-root-in-etc-systemd-system"><span>service operations (must root in /etc/systemd/system)</span></a></h3><div class="language-SHELL line-numbers-mode" data-highlighter="prismjs" data-ext="SHELL" data-title="SHELL"><pre><code><span class="line">[root@informatica ~]# systemctl enable/disable vncserver\\@:10.service         #是否开机自动启，建议不要设置</span>
<span class="line">[root@informatica ~]# systemctl start/stop/status vncserver\\@:10.service     #启动或结束kettle的vnc桌面</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="change-desktop-password-and-logon-remote" tabindex="-1"><a class="header-anchor" href="#change-desktop-password-and-logon-remote"><span>change desktop password and logon remote</span></a></h3><div class="language-SHELL line-numbers-mode" data-highlighter="prismjs" data-ext="SHELL" data-title="SHELL"><pre><code><span class="line">[root@informatica ~]# vncpasswd kettle</span>
<span class="line"># @vnc viewer</span>
<span class="line">- VNC Server: 192.168.1.23:10</span>
<span class="line">- Name: kettle</span>
<span class="line">- Password: desktop</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vnc-list-on-192-168-1-23-infa-kettle" tabindex="-1"><a class="header-anchor" href="#vnc-list-on-192-168-1-23-infa-kettle"><span>vnc list on 192.168.1.23 (infa, kettle)</span></a></h3><div class="language-SHELL line-numbers-mode" data-highlighter="prismjs" data-ext="SHELL" data-title="SHELL"><pre><code><span class="line">[root@informatica ~]# ls /etc/systemd/system |grep vnc  #1-root, 3-informatica, 10-kettle</span>
<span class="line">vncserver@:10.service</span>
<span class="line">vncserver@:1.service</span>
<span class="line">vncserver@:3.service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>example</span></a></h3><div class="language-SHELL line-numbers-mode" data-highlighter="prismjs" data-ext="SHELL" data-title="SHELL"><pre><code><span class="line">[root@informatica ~]# cp /lib/systemd/system/vncserver@.service /lib/systemd/system/vncserver@:1.service</span>
<span class="line">[root@informatica ~]# cp /lib/systemd/system/vncserver@.service /lib/systemd/system/vncserver@:2.service</span>
<span class="line">[root@informatica ~]# cp /lib/systemd/system/vncserver@.service /lib/systemd/system/vncserver@:3.service</span>
<span class="line">[root@informatica ~]# vi /lib/systemd/system/vncserver@:1.service  #&lt;user&gt; -&gt; root</span>
<span class="line">[root@informatica ~]# vi /lib/systemd/system/vncserver@:2.service  #&lt;user&gt; -&gt; informatica</span>
<span class="line">[root@informatica ~]# vi /lib/systemd/system/vncserver@:3.service  #&lt;user&gt; -&gt; kettle</span>
<span class="line">[root@informatica ~]# systemctl daemon-reload</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26)]))}const o=e(l,[["render",t],["__file","remote.html.vue"]]),d=JSON.parse('{"path":"/centos/remote.html","title":"Centos7远程桌面配置","lang":"en-US","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"Xmanager5","slug":"xmanager5","link":"#xmanager5","children":[{"level":3,"title":"new Xstart session","slug":"new-xstart-session","link":"#new-xstart-session","children":[]},{"level":3,"title":"to DISPALY","slug":"to-dispaly","link":"#to-dispaly","children":[]}]},{"level":2,"title":"VNC","slug":"vnc","link":"#vnc","children":[{"level":3,"title":"install rpm","slug":"install-rpm","link":"#install-rpm","children":[]},{"level":3,"title":"new desktop(kettle as example)","slug":"new-desktop-kettle-as-example","link":"#new-desktop-kettle-as-example","children":[]},{"level":3,"title":"service operations (must root in /etc/systemd/system)","slug":"service-operations-must-root-in-etc-systemd-system","link":"#service-operations-must-root-in-etc-systemd-system","children":[]},{"level":3,"title":"change desktop password and logon remote","slug":"change-desktop-password-and-logon-remote","link":"#change-desktop-password-and-logon-remote","children":[]},{"level":3,"title":"vnc list on 192.168.1.23 (infa, kettle)","slug":"vnc-list-on-192-168-1-23-infa-kettle","link":"#vnc-list-on-192-168-1-23-infa-kettle","children":[]},{"level":3,"title":"example","slug":"example","link":"#example","children":[]}]}],"git":{},"filePathRelative":"centos/remote.md"}');export{o as comp,d as data};
