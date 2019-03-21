var fso,
  fldr,
  s = "";
// 创建FileSystemObject对象实例
fso = new ActiveXObject("Scripting.FileSystemObject");
// 获取Drive 对象
fldr = fso.GetFolder("c:\\");
// 显示父目录名称
alert("Parent folder name is: " + fldr + "\n");
// 显示所在drive名称
alert("Contained on drive " + fldr.Drive + "\n");
// 判断是否为根目录
if (fldr.IsRootFolder) alert("This is the root folder.");
else alert("This folder isn’t a root folder.");
alert("\n\n");
// 创建新文件夹
fso.CreateFolder("C:\\Bogus");
alert("Created folder C:\\Bogus" + "\n");
// 显示文件夹基础名称，不包含路径名
alert("Basename = " + fso.GetBaseName("c:\\bogus") + "\n");
// 删除创建的文件夹
fso.DeleteFolder("C:\\Bogus");
alert("Deleted folder C:\\Bogus" + "\n");
